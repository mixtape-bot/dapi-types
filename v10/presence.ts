import type { integer, snowflake } from "../types";
import type { User } from "./user";

export interface Presence {
    user: User;
    guild_id: snowflake;
    status: PresenceStatus;
    activities: Array<Activity>;
    client_status: ClientStatus;
}

export type PresenceStatus = |
    "idle" |
    "dnd" |
    "online" |
    "offline";

export interface Activity {
    name: string;
    type: ActivityTypes;
    url?: string | null;
    created_at: integer;
    timestamps?: ActivityTimestamps;
    application_id?: 
    snowflake;
    details?: string | null;
    state?: string | null;
    emoji?: ActivityEmoji | null;
    party?: ActivityParty;
    assets?: ActivityAssets;
    secrets?: ActivitySecrets;
    instance?: boolean;
    flags?: integer;
    buttons?: Array<ActivityButton>
}

export enum ActivityTypes {
    Game,
    Streaming,
    Listening,
    Watching,
    Custom,
    Competing
}

export interface ActivityTimestamps {
    start?: integer;
    end?: integer;
}

export interface ActivityEmoji {
    name: string;
    id?: snowflake;
    animated?: boolean;
}

export interface ActivityParty {
    id?: string;
    size?: [ current_size: integer, max_size: integer ];
}

export interface ActivityAssets {
    large_image?: string;
    large_text?: string;
    small_image?: string;   
    small_text?: string;
}

export interface ActivitySecrets {
    join?: string;
    spectate?: string;
    match?: string;
}

export enum ActivityFlags {
    INSTANCE = 1 << 0,
    JOIN = 1 << 1,
    SPECTATE = 1 << 2,
    JOIN_REQUEST = 1 << 3,
    SYNC = 1 << 4,
    PLAY = 1 << 5,
    PARTY_PRIVACY_FRIENDS = 1 << 6,
    PARTY_PRIVACY_VOICE_CHANNEL = 1 << 7,
    EMBEDDED_INSTANCE = 1 << 8
}

export interface ActivityButton {
    label: string;
    url: string;
}

export interface ClientStatus {
    desktop?: string;
    mobile?: string;
    web?: string;
}
