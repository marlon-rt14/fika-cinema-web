import { Cast, CastResponse } from "@/modules/shared/interfaces";

export const toCastModel = (cast: CastResponse):Cast => cast;

export const toCastsModel = (casts: CastResponse[]):Cast[] => casts.map(toCastModel);
