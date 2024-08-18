"use client";

import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"


export const useCarList = (limit: number = 6) => {
    const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ["get-car-list"],
        queryFn: async ({ pageParam }) => {
            const { data } = await axios.get(`${process.env.NEXT_APP_URL!}/api/cars`, {
                params: {
                    limit,
                    page: pageParam
                }
            });
            return {
                cars: data.cars,
                totalPages: data.totalPages,
                totalElements: data.totalDocuments,
                currentPage: data.page
            }
        },
        getNextPageParam: (lastPage) => {
            if (lastPage.currentPage < lastPage.totalPages - 1) {
                return lastPage.currentPage + 1;
            }

            return undefined;
        },
        initialPageParam: 1
    })

    console.log(data);
    

    return {
        carList: data?.pages.flatMap((page) => page.cars),
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    }
}