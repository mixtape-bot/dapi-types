import type { integer, ISO8601_timestamp } from "../types";

export interface Embed {
    title?: string;
    type?: EmbedType;
    description?: string;
    url?: string;
    timestamp: ISO8601_timestamp;
    color?: integer;
    footer?: EmbedFooter;
    image?: EmbedImage;
    thumbnail?: EmbedThumbnail;
    video?: EmbedVideo;
    provider?: EmbedProvider;
    author?: EmbedAuthor;
    fields?: Array<EmbedField>;
}

export type EmbedType = |
    "rich" |
    "image" |
    "video" |
    "gifv" |
    "article" |
    "link";

export interface EmbedFooter {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

export interface EmbedImage {
    
}

export interface EmbedThumbnail {
    url: string;
    proxy_url?: string;
    height?: integer;
    width?: integer;
}

export interface EmbedVideo {
    url: string;
    proxy_url?: string;
    height?: integer;
    width?: integer;
}    

export interface EmbedProvider {
    name?: string
    url?: string;
}

export interface EmbedAuthor {
    name: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

export interface EmbedField {
    
}
