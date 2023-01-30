import { AppDispatch, AppState } from "@/module";
import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
