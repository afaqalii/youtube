import { useEffect } from "react"
import { fetchDataFromApi } from "../apis/api"

const useFetch = () => {
    useEffect(() => {
        fetchDataFromApi("")
    })
}