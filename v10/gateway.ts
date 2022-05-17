export enum GatewayOpCode {
    Dispatch = 0,
    Heartbeat = 1,
    Identify = 2,
    PresenceUpdate = 3,
    VoiceStateUpdate = 4,
    VoiceServerPing = 5,
    Resume = 6,
    Reconnect = 7,
    RequestGuildMembers = 8,
    InvalidSession = 9,
    Hello = 10,
    HeartbeatAck = 11,
    GuildSync = 12,
    CallConnect = 13,
    GuildSubscriptions = 14,
    LobbyConnect = 15,
    LobbyDisconnect = 16,
    LobbyVoiceStatesUpdate = 17,
    StreamCreate = 18,
    StreamDelete = 19,
    StreamWatch = 20,
    StreamPing = 21,
    StreamSetPaused = 22,
    _ = 23,
    RequestGuildApplicationCommands = 24,
    EmbeddedActivityLaunch = 25,
    EmbeddedActivityClose = 26,
    EmbeddedActivityUpdate = 27,
    RequestForumUnreads = 28
}

export interface Heartbeat {}

export interface Identify {}

export interface PresenceUpdate {}

export interface VoiceStateUpdate {}

export interface VoiceServerPing {}

export interface Resume {}

export interface Reconnect {}

export interface RequestGuildMembers {}

export interface InvalidSession {}

export interface Hello {}

export interface HeartbeatAck {}

export interface GuildSync {}

export interface CallConnect {}

export interface GuildSubscriptions {
    guild_id: string;
}

export interface LobbyConnect {
    lobby_id: string;
    lobby_secret: string;
}

export interface LobbyDisconnect {
    lobby_id: string;
}

export type LobbyVoiceStatesUpdate = Array<{
    lobby_id: string;
    self_mute: boolean;
    self_deaf: boolean;
}>

export interface StreamCreate {}

export interface StreamDelete {}

export interface StreamWatch {}

export interface StreamPing {}

export interface StreamSetPaused {}

export interface RequestGuildApplicationCommands {}

export interface EmbeddedActivityLaunch {
    guild_id: string;
    channel_id: string;
    embedded_activity: any;
}

export interface EmbeddedActivityClose {
    guild_id: string;
    channel_id: string;
    application_id: string;
}

export interface EmbeddedActivityUpdate {
    guild_id: string;
    channel_id: string;
    embedded_activity: {
        application_id: string;
    };
}

export interface RequestForumUnreads {}
