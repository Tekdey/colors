export const randomEmoji = () => {
  let emojis = [
    "😀",
    "😁",
    "😂",
    "🤣",
    "😃",
    "😄",
    "😅",
    "😆",
    "😗",
    "🥰",
    "😘",
    "😍",
    "😎",
    "😋",
    "😊",
    "😉",
    "😙",
    "😚",
    "🤩",
    "😏",
    "🙄",
    "😛",
    "🙃",
    "😜",
    "😝",
    "🙃",
    "🥴",
  ];

  return emojis[Math.floor(Math.random() * emojis.length)];
};
