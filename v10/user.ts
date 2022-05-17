import type { integer, snowflake, TODO } from "../types";

export interface User {
    id: snowflake;
    username: string;
    discriminator: string;
    avatar: string | null;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    banner?: string | null;
    accent_color?: string | null;
    locale?: string;
    verified?: boolean;
    email?: string | null;
    flags?: PremiumTypes;
    premium_type?: integer;
    public_flags?: integer;
}

export enum UserFlags {
    STAFF = 1 << 0,
    PARTNER = 1 << 1,
    HYPESQUAD = 1 << 2,
    BUG_HUNTER_LEVEL_1 = 1 << 3,
    HYPESQUAD_ONLINE_HOUSE_1 = 1 << 6,
    HYPESQUAD_ONLINE_HOUSE_2 = 1 << 7,
    HYPESQUAD_ONLINE_HOUSE_3 = 1 << 8,
    PREMIUM_EARLY_SUPPORTER = 1 << 9,
    TEAM_PSEUDO_USER = 1 << 10,
    BUG_HUNTER_LEVEL_2 = 1 << 14,
    VERIFIED_BOT = 1 << 16,
    VERIFIED_DEVELOPER = 1 << 17,
    CERTIFIED_MODERATOR = 1 << 18,
    BOT_HTTP_INTERACTIONS = 1 << 19,
}

export enum PremiumTypes {
    None = 0,
    NitroClassic = 1,
    Nitro = 2
}

export interface Connection {
    id: string;
    name: string;
    type: string;
    revoked?: boolean;
    integrations?: Array<TODO>;
    verified: boolean;
    friend_sync: boolean;
    show_activity: boolean;
    visiblity: VisibilityTypes;
}

export enum VisibilityTypes {
    None = 0,
    Everyone = 1
}
