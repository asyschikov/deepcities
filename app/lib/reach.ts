import { VISIT_MAX_SLACK_M, VISIT_REACH_M } from "~/lib/constants";
import { distanceMeters } from "~/lib/diff";

export interface Position {
  lat: number;
  lng: number;
  accuracy: number;
}

/**
 * On the spot, close enough to check in: within VISIT_REACH_M of the
 * place, or within the phone's own accuracy when that is worse (capped at
 * VISIT_MAX_SLACK_M). Shared by the server's check and the button.
 */
export const onTheSpot = (
  position: Position,
  target: { lat: number; lng: number },
): boolean =>
  distanceMeters(position, target) <=
  Math.max(VISIT_REACH_M, Math.min(position.accuracy, VISIT_MAX_SLACK_M));
