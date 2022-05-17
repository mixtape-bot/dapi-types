import type { integer, ISO8601_timestamp, snowflake, TODO } from "../types";
import type { Channel } from "./channel";
import type { Presence } from "./presence";
import type { GuildScheduledEvent } from "./scheduled_event";
import type { StageInstance } from "./stage";
import type { User } from "./user";

export interface Guild {
    id: snowflake;
    name: string;
    icon: string | null;
    icon_hash?: string | null;
    splash: string | null;
    discovery_splash: string | null;
    owner?: boolean;
    owner_id: snowflake;
    permissions?: string;
    region?: string | null;
    afk_channel_id: snowflake | null;
    afk_timeout: integer;
    widget_enabled?: boolean;
    widget_channel_id?: snowflake | null;
    verification_level: VerificationLevels;
    default_message_notifications: MessageNotificationLevels;
    explicit_content_filter: ExplicitContentFilterLevels;
    roles: Array<Role>;
    emojis: Array<Emoji>;
    features: Array<GuildFeature>;
    mfa_level: MFALevels;
    application_id: snowflake | null;
    system_channel_id: snowflake | null;
    system_channel_flags: SystemChannelFlags;
    rules_channel_id: snowflake | null;
    joined_at?: ISO8601_timestamp;
    large?: boolean;
    unavailable?: boolean;
    member_count?: integer;
    voice_states?: Array<VoiceState>;
    members?: Array<GuildMember>;
    channels?: Array<Channel>;
    threads?: Array<Channel>;
    presences?: Array<Presence>;
    max_presences?: integer | null;
    max_members?: integer;
    vanity_url_code: string | null;
    description: string | null;
    banner: string | null;
    premium_tier: PremiumTiers;
    premium_subscription_count: integer;
    preferred_locale: string;
    public_updates_channel_id: snowflake | null;
    max_video_channel_users?: integer;
    approximate_member_count?: integer;
    approximate_presence_count?: integer;
    welcome_screen?: WelcomeScreen;
    nsfw_level: NsfwLevels;
    stage_instances?: Array<StageInstance>;
    stickers?: Array<Sticker>;
    guild_scheduled_events?: Array<GuildScheduledEvent>;
    premium_progress_bar_enabled: boolean;
}

export enum VerificationLevels {
    NONE = 0,
    LOW,
    MEDIUM,
    HIGH,
    VERY_HIGH
}

export enum MessageNotificationLevels {
    ALL_MESSAGES,
    ONLY_MENTIONS
}

export enum ExplicitContentFilterLevels {
    DISABLED,
    MEMBERS_WITHOUT_ROLES,
    ALL_MEMBERS
}

export interface Role {
    id: snowflake;
    name: string;
    color: integer;
    hoist: boolean;
    icon?: string | null;
    unicode_emoji?: string | null;
    position: integer;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    role_tags?: RoleTags;
}

export interface RoleTags {
    bot_id?: snowflake;
    integration_id?: snowflake;
    premium_subscriber?: TODO;
}

export interface Emoji {
    id: snowflake | null;
    name: string | null;
    roles?: Array<snowflake>;
    user?: User;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}

export type GuildFeature = |
    "ANIMATED_BANNER" |
    "ANIMATED_ICON" |
    "BANNER" |
    "COMMERCE" |
    "COMMUNITY" |
    "DISCOVERABLE" |
    "FEATURABLE" |
    "INVITE_SPLASH" |
    "MEMBER_VERIFICATION_GATE_ENABLED" |
    "MONETIZATION_ENABLED" |
    "MORE_STICKERS" |
    "NEWS" |
    "PARTNERED" |
    "PREVIEW_ENABLED" |
    "PRIVATE_THREADS" |
    "ROLE_ICONS" |
    "SEVEN_DAY_THREAD_ARCHIVE" |
    "THREE_DAY_THREAD_ARCHIVE" |
    "TICKETED_EVENTS_ENABLED" |
    "VANITY_URL" |
    "VERIFIED" |
    "VIP_REGIONS" |
    "WELCOMED_SCREEN_ENABLED";

export enum MFALevels {
    NONE,
    ELEVATED
}

export enum SystemChannelFlags {
    SUPPRESS_JOIN_NOTIFICATIONS = 1 << 0,
    SUPPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1,
    SUPPRESS_GUILD_REMINDER_NOTIFICATIONS = 1 << 2,
    SUPPRESS_JOIN_NOTIFICATION_REPLIES = 1 << 3,
}

export interface VoiceState {
    guild_id?: snowflake;
    channel_id: snowflake | null;
    user_id: snowflake;
    member?: GuildMember;
    session_id: string;
    deaf: boolean;
    mute: boolean;
    self_deaf: boolean;
    self_mute: boolean;
    self_stream?: boolean;
    self_video: boolean;
    suppress: boolean;
    request_to_speak_timestamp: ISO8601_timestamp | null;
}

export interface GuildMember {
    user?: User;
    nick?: string | null;
    avatar?: string | null;
    roles: Array<snowflake>;
    joined_at: ISO8601_timestamp;
    premium_since?: ISO8601_timestamp | null;
    deaf: boolean;
    mute: boolean;
    pending?: boolean;
    permissions?: string;
    communication_disabled_until?: ISO8601_timestamp | null;
}

export enum PremiumTiers {
    NONE,
    TIER_1,
    TIER_2,
    TIER_3
}

export interface WelcomeScreen {
    description: string | null;
    welcome_channels: Array<WelcomeScreenChannel>;
}

export interface WelcomeScreenChannel {
    channel_id: snowflake;
    description: string;
    emoji_id: snowflake | null;
    emoji_name: string | null;
}

export enum NsfwLevels {
    DEFAULT,
    EXPLICIT,
    SAFE,
    AGE_RESTRICTED
}

export interface Sticker {
    id: snowflake;
    pack_id?: snowflake;
    name: string;
    description: string | null;
    tags: string;
    asset?: string;
    type: StickerTypes;
    format_type: StickerFromatTypes;
    available?: boolean;
    guild_id?: snowflake;
    user?: User;
    sort_value?: integer;
}

export enum StickerTypes {
    STANDARD = 1,
    GUILD,
}

export enum StickerFromatTypes {
    PNG = 1,
    APNG,
    LOTTIE,
}
