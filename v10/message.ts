import type { integer, ISO8601_timestamp, snowflake } from "../types";
import type { Application } from "./application";
import type { ChannelTypes } from "./channel";
import type { Embed } from "./embed";
import type { GuildMember } from "./guild";
import type { User } from "./user";

export interface Message {
    id: snowflake;
    channel_id: snowflake;
    guild_id?: snowflake;
    author: User;
    member?: GuildMember;
    content: string;
    timestamp: ISO8601_timestamp;
    edited_timestamp: ISO8601_timestamp | null;
    tts: boolean;
    mention_everyone: boolean;
    mentions: Array<User & { member: GuildMember }>;
    mention_roles: Array<snowflake>;
    mention_channels: Array<ChannelMention>;
    attachments: Array<Attachment>;
    embeds: Array<Embed>;
    reactions?: Array<Reaction>;
    nonce?: integer | string;
    pinned: boolean;
    webhook_id?: snowflake;
    type: MessageTypes;
    activity?: MessageActivity;
    application?: Application
}

export interface ChannelMention {
    id: snowflake;
    guild_id: snowflake;
    type: ChannelTypes;
    name: string;
}

export interface Attachment {
    id: snowflake;
    filename: string;
    description?: string;
    content_type?: string;
    size: integer;
    url: string;
    proxy_url: string;
    height?: integer | null;
    width?: integer | null;
    ephemeral?: boolean;
}

export interface Reaction {
}

export enum MessageTypes {
}

export interface MessageActivity {
}    
