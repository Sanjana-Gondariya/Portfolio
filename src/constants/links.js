// TODO: Paste real LinkedIn profile URL below
export const LINKEDIN_URL = 'www.linkedin.com/in/sanjana-gondariya-3589502a7';

export const GITHUB_URL = 'https://github.com/Sanjana-Gondariya';
export const EMAIL = 'sanjanaplayz@gmail.com';

// TODO: Add resume PDF at public/resume.pdf
export const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`;

// TODO: Paste Gesture project GitHub URL below
export const GESTURE_SOURCE_URL = 'PASTE_GESTURE_PROJECT_GITHUB_URL_HERE';

// TODO: Paste Gesture project live demo URL below
export const GESTURE_DEMO_URL = 'PASTE_GESTURE_PROJECT_DEMO_URL_HERE';

// TODO: Paste Moodle-inspired project GitHub URL below
export const MOODLE_GITHUB_URL = 'PASTE_MOODLE_GITHUB_URL_HERE';

/** Returns true when a URL constant has been replaced with a real link */
export function isLinkReady(url) {
  return Boolean(url && !url.includes('PASTE_'));
}
