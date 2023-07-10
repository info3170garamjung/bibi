export const stripHtmlTags = (str) => {
  if((str === null) || (str === ''))
    return false;
  else 
    str = str.toString();
  str = str.replace(/<[^>]*>/g, ''); // HTML 태그 제거
  str = str.replace(/&[^;]+;/g, ''); // HTML 엔티티 제거
  return str;
}
