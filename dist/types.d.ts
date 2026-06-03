export type TokenTheme = "light" | "dark";
export type TokenColourKey = "background" | "foreground" | "card" | "card-foreground" | "primary" | "primary-foreground" | "secondary" | "secondary-foreground" | "muted" | "muted-foreground" | "accent" | "accent-foreground" | "destructive" | "destructive-foreground" | "border" | "input" | "ring";
export type TokenColours = Record<TokenColourKey, string>;
export type TokenSpacing = Record<string, string>;
export type TokenRadii = Record<"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full", string>;
export type TokenShadows = Record<"sm" | "md" | "lg" | "xl" | "2xl", string>;
export type TokenTypography = {
    fontFamily: Record<"sans" | "mono", string[]>;
    fontSize: Record<"xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl", [
        string,
        {
            lineHeight: string;
        }
    ]>;
};
export type BrandConfig = Readonly<{
    name: string;
    tagline: string;
    logoPath: string;
    faviconPath: string;
    appleTouchIconPath: string;
}>;
//# sourceMappingURL=types.d.ts.map