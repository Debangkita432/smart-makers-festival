export {};

declare global {
  interface Window {
    botpressWebChat?: {
      init?: (config?: {
        botId?: string;
        clientId?: string;
        hostUrl?: string;
        messagingUrl?: string;
        hideWidget?: boolean;
        disableAnimations?: boolean;
        enableConversationDeletion?: boolean;
        showConversationsButton?: boolean;
        enableTranscriptDownload?: boolean;
        closeOnEscape?: boolean;
        showPoweredBy?: boolean;
        disableAnalytics?: boolean;
        enablePersistSessionInStorage?: boolean;
        stylesheet?: string;
        theme?: string;
        themeColor?: string;
        containerWidth?: string;
        layoutWidth?: string;
        zIndex?: number;
      }) => void;
      show?: () => void;
      hide?: () => void;
      sendEvent?: (event: { type: string }) => void; // <- made optional for safety
      mergeConfig?: (config: object) => void;
      sendPayload?: (payload: object) => void;
      onEvent?: (callback: (event: object) => void) => void;
    };
  }
}
