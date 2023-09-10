export const formattedDate = new Date(date).toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export const formattedAddress = location.replace(', ', '\n');
