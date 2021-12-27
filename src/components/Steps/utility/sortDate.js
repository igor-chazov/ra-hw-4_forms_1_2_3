function formatDate(date) {
  const
    year = date.slice(6),
    month = date.slice(3, 5),
    dateNum = date.slice(0, 2);

  return `${year}-${month}-${dateNum}`;
}

export default function sortDate(dateArr) {
  return dateArr.sort(function (a, b) {
    const date1 = Date.parse(formatDate(a.date));
    const date2 = Date.parse(formatDate(b.date));
    if (date1 < date2) return 1;
    return -1;
  })
}
