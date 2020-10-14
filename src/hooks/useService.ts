import { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { Service } from "services/configs/Service";
export default interface ApplicationRequest
  extends Pick<AxiosRequestConfig, "url" | "baseURL" | "method" | "params" | "data"> {
  cacheKey?: number;
  mockData?: any;
}

export const useService = <T>(request: ApplicationRequest | null): Service<T> => {
  const [result, setResult] = useState<Service<T>>({
    status: "loading",
  });

  // return mock data in development environment
  if (process.env.NODE_ENV !== "production" && result.status !== "loaded" && request?.mockData != null) {
    setResult({
      status: "loaded",
      payload: request.mockData,
    });
  }

  return result;
};
