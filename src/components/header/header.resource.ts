import useSWR from "swr";
import { openmrsFetch, restBaseUrl } from "@openmrs/esm-framework";

export interface LocationResponse {
  uuid: string;
  display: string;
  name: string;
  description: any;
  tags: Tag[];
  parentLocation: ParentLocation;
  childLocations: ChildLocation[];
  links: Link[];
}

export interface Tag {
  uuid: string;
  display: string;
  links: Link[];
}

export interface Link {
  rel: string;
  uri: string;
  resourceAlias: string;
}

export interface ParentLocation {
  uuid: string;
  display: string;
  links: Link[];
}

export interface ChildLocation {
  uuid: string;
  display: string;
  links: Link[];
}

export function useParentLocation(currentQueueLocationUuid: string) {
  const apiUrl = `/ws/rest/v1/location/${currentQueueLocationUuid}`;
  const { data, error, isLoading, isValidating, mutate } = useSWR<
    { data: LocationResponse },
    Error
  >(apiUrl, openmrsFetch);

  return {
    location: data?.data,
    isLoading,
    isError: error,
    isValidating,
    mutate,
  };
}
