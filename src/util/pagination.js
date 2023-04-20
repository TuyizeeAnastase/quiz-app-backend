export const getPagination = (page, limit) => {
    const currentPage = page > 0 ? page : 1;
    const resultsLimit = limit ? limit : 10;
    const offset = currentPage ? (currentPage - 1) * resultsLimit : 1;
    return { resultsLimit, offset };
  };
  
  export const getPagingData = (data, page, resultsLimit) => {
    const { count: totalItems, rows: results } = data;
    const currentPage = page > 0 ? parseInt(page) : 1;
  
    const totalPages = Math.ceil(totalItems / resultsLimit);
  
    return { totalPages, currentPage, totalItems, results };
  };