import { useContext } from "react";
import ClientStyleContext from "../contexts/ClientStyleContext";

export default function useClientStyleData() {
    return useContext(ClientStyleContext);
}
