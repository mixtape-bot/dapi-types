import type { ISO8601_timestamp, snowflake } from "../types";
import type { User } from "./user";

export interface GuildScheduledEvent {
    id: snowflake;
    guild_id: snowflake;
    channel_id: snowflake | null;
    creator_id?: snowflake | null;
    name: string;
    description?: string | null;
    scheduled_start_time: ISO8601_timestamp;
    scheduled_end_time: ISO8601_timestamp | null;
    privacy_level: ScheduledEventPrivacyLevel
    status: EventStatus;
    entity_type: ScheduledEntityTypes;
    entity_id: snowflake | null;
    entity_metadata: EntityMetadata | null;
    creator?: User;
    user_count?: number;
    image?: string | null;
}

export enum ScheduledEventPrivacyLevel {
    GUILD_ONLY = 2,
}

export enum EventStatus {
    SCHEDULED = 1,
    ACTIVE,
    COMPLETED,
    CANCELLED
}

export enum ScheduledEntityTypes {
    STAGE_INSTANCE = 1,
    VOICE,
    EXTERNAL
}

export interface EntityMetadata {
    location?: string;
}
