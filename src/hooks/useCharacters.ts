import {useQuery} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import {Character} from "../interfaces/character";
import axios from "axios";
import CharactersResponse from "../interfaces/characters-response";
import {CharacterStatusKey} from "../types/character-status";

export const useCharacters = () => {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [charactersToShowCount, setCharactersToShowCount] = useState(8);
  const visibleCharacters = characters.slice(0, charactersToShowCount);

  const fetchCharacters = async (
    page: number = 1,
    filter: string = ""
  ): Promise<CharactersResponse> => {
    const response = await axios.get(
      `${
        import.meta.env.VITE_CHARACTERS_ENDPOINT
      }?page=${page}&status=${filter}`
    );
    return response.data;
  };

  const {data} = useQuery({
    queryKey: ["characters", currentPage, filter],
    queryFn: () => fetchCharacters(currentPage, filter),
    keepPreviousData: true,
    staleTime: 5000,
  });

  useEffect(() => {
    if (data?.results) {
      const newCharacters = data.results;
      if (charactersToShowCount > 8) {
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...newCharacters,
        ]);
      } else {
        setCharacters(newCharacters);
      }
    }
  }, [charactersToShowCount, data?.results]);

  const pages = data?.info.pages;
  const totalCharacters = data?.info.count;

  const handleFilter = (key: CharacterStatusKey | string) => {
    setCharactersToShowCount(8);
    setCurrentPage(1);
    setFilter(key);
  };

  const handleCharactersToShowCount = () => {
    if (!totalCharacters) return null;

    const newCount = charactersToShowCount + 8;
    if (newCount <= totalCharacters) {
      setCharactersToShowCount(newCount);
    } else {
      setCharactersToShowCount(totalCharacters);
    }
  };

  const handleLoadMore = () => {
    if (characters.length < visibleCharacters.length + 8) {
      setCurrentPage(currentPage + 1);
      handleCharactersToShowCount();
    } else {
      handleCharactersToShowCount();
    }
  };

  return {
    visibleCharacters,
    currentPage,
    pages: pages ?? 0,
    handleLoadMore,
    handleFilter,
  };
};
