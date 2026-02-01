const DEFAULT_LOTTIE_ICON = 'source';

export const loadLottie = async (iconName?: string) => {
  try {
    return await import(`~/public/icons/${iconName}.json`);
  } catch {
    return await import(`~/public/icons/${DEFAULT_LOTTIE_ICON}.json`);
  }
};
