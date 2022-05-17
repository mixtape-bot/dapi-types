import type { integer, ISO8601_timestamp, snowflake } from "../types";
import type { User } from "./user";

export interface Channel {
    id: string;
    type: ChannelTypes;
    guild_id?: snowflake;
    position?: integer;
    permission_overwrites?: Array<Overwrite>;
    name?: string | null;
    topic?: string | null;
    nsfw?: boolean;
    last_message_id?: snowflake | null;
    bitrate?: integer;
    user_limit?: integer;
    rate_limit_per_user?: integer;
    recipients?: Array<User>;
    icon?: string | null;
    owner_id?: snowflake;
    application_id?: snowflake;
    parent_id?: snowflake | null;
    last_pin_timestamp?: ISO8601_timestamp | null;
    rtc_region?: string | null;
    video_quality_mode?: VideoQualityModes;
    message_count?: integer;
    member_count?: integer;
    thread_metadata?: ThreadMetadata;
    member?: ThreadMember;
    default_auto_archive_duration?: integer;
    permissions?: string;
    flags?: integer;
}

export enum ChannelTypes {
    GUILD_TEXT = 0,
    DM,
    GUILD_VOICE,
    GROUP_DM,
    GUILD_CATEGORY,
    GUILD_NEWS,
    GUILD_NEWS_THREAD = 10,
    GUILD_PUBLIC_THREAD,
    GUILD_PRIVATE_THREAD,
    GUILD_STAGE_VOICE,
    GUILD_DIRECTORY,
    GUILD_FORUM
}

export enum VideoQualityModes {
    AUTO = 1,
    FULL = 2
}

export enum ChannelFlags {
    PINNED = 1 << 1,
}

export interface ThreadMetadata {
    archived: boolean;
    auto_archive_duration: integer;
    archive_timestamp: ISO8601_timestamp;
    locked: boolean;
    invitable?: boolean;
    create_timestamp?: ISO8601_timestamp | null;
}

export interface ThreadMember {
    id?: snowflake;
    user_id?: snowflake;
    join_timestamp: ISO8601_timestamp;
    flags: integer;
}

export interface Overwrite {
    id: snowflake;
    type: integer;
    allow: string;
    deny: string;
}