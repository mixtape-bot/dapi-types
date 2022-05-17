import type { snowflake } from "../types";

export interface StageInstance {
    id: snowflake;
    guild_id: snowflake
    channel_id: snowflake;
    topic: string;
    privacy_level: StageInstancePrivacyLevel;
    discoverable_disabled: boolean;
    guild_scheduled_event_id: snowflake | null;
}

export enum StageInstancePrivacyLevel {
    PUBLIC = 1,
    GUILD_ONLY = 2,
}