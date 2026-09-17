import { useEffect, useState } from "react";
import { getPortfolioData } from "../lib/portfolio";

const INITIAL_PORTFOLIO = {
  projects: [],
  certificates: [],
  comments: [],
};

export function usePortfolioData() {
  const [portfolio, setPortfolio] = useState(INITIAL_PORTFOLIO);

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let active = true;

    getPortfolioData()
      .then((data) => {
        if (!active) return;

        setPortfolio(data);
        setLoadError("");
      })
      .catch(() => {
        if (!active) return;

        setLoadError("Data portofolio belum dapat dimuat.");
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  function addComment(comment) {
    setPortfolio((current) => ({
      ...current,
      comments: [comment, ...current.comments],
    }));
  }

  return {
    portfolio,
    loading,
    loadError,
    addComment,
  };
}
