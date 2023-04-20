"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPagingData = exports.getPagination = void 0;
var getPagination = function getPagination(page, limit) {
  var currentPage = page > 0 ? page : 1;
  var resultsLimit = limit ? limit : 10;
  var offset = currentPage ? (currentPage - 1) * resultsLimit : 1;
  return {
    resultsLimit: resultsLimit,
    offset: offset
  };
};
exports.getPagination = getPagination;
var getPagingData = function getPagingData(data, page, resultsLimit) {
  var totalItems = data.count,
    results = data.rows;
  var currentPage = page > 0 ? parseInt(page) : 1;
  var totalPages = Math.ceil(totalItems / resultsLimit);
  return {
    totalPages: totalPages,
    currentPage: currentPage,
    totalItems: totalItems,
    results: results
  };
};
exports.getPagingData = getPagingData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRQYWdpbmF0aW9uIiwicGFnZSIsImxpbWl0IiwiY3VycmVudFBhZ2UiLCJyZXN1bHRzTGltaXQiLCJvZmZzZXQiLCJleHBvcnRzIiwiZ2V0UGFnaW5nRGF0YSIsImRhdGEiLCJ0b3RhbEl0ZW1zIiwiY291bnQiLCJyZXN1bHRzIiwicm93cyIsInBhcnNlSW50IiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvcGFnaW5hdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0UGFnaW5hdGlvbiA9IChwYWdlLCBsaW1pdCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gcGFnZSA+IDAgPyBwYWdlIDogMTtcbiAgICBjb25zdCByZXN1bHRzTGltaXQgPSBsaW1pdCA/IGxpbWl0IDogMTA7XG4gICAgY29uc3Qgb2Zmc2V0ID0gY3VycmVudFBhZ2UgPyAoY3VycmVudFBhZ2UgLSAxKSAqIHJlc3VsdHNMaW1pdCA6IDE7XG4gICAgcmV0dXJuIHsgcmVzdWx0c0xpbWl0LCBvZmZzZXQgfTtcbiAgfTtcbiAgXG4gIGV4cG9ydCBjb25zdCBnZXRQYWdpbmdEYXRhID0gKGRhdGEsIHBhZ2UsIHJlc3VsdHNMaW1pdCkgPT4ge1xuICAgIGNvbnN0IHsgY291bnQ6IHRvdGFsSXRlbXMsIHJvd3M6IHJlc3VsdHMgfSA9IGRhdGE7XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBwYWdlID4gMCA/IHBhcnNlSW50KHBhZ2UpIDogMTtcbiAgXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gcmVzdWx0c0xpbWl0KTtcbiAgXG4gICAgcmV0dXJuIHsgdG90YWxQYWdlcywgY3VycmVudFBhZ2UsIHRvdGFsSXRlbXMsIHJlc3VsdHMgfTtcbiAgfTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUMsSUFBSSxFQUFFQyxLQUFLLEVBQUs7RUFDMUMsSUFBTUMsV0FBVyxHQUFHRixJQUFJLEdBQUcsQ0FBQyxHQUFHQSxJQUFJLEdBQUcsQ0FBQztFQUN2QyxJQUFNRyxZQUFZLEdBQUdGLEtBQUssR0FBR0EsS0FBSyxHQUFHLEVBQUU7RUFDdkMsSUFBTUcsTUFBTSxHQUFHRixXQUFXLEdBQUcsQ0FBQ0EsV0FBVyxHQUFHLENBQUMsSUFBSUMsWUFBWSxHQUFHLENBQUM7RUFDakUsT0FBTztJQUFFQSxZQUFZLEVBQVpBLFlBQVk7SUFBRUMsTUFBTSxFQUFOQTtFQUFPLENBQUM7QUFDakMsQ0FBQztBQUFDQyxPQUFBLENBQUFOLGFBQUEsR0FBQUEsYUFBQTtBQUVLLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUMsSUFBSSxFQUFFUCxJQUFJLEVBQUVHLFlBQVksRUFBSztFQUN6RCxJQUFlSyxVQUFVLEdBQW9CRCxJQUFJLENBQXpDRSxLQUFLO0lBQW9CQyxPQUFPLEdBQUtILElBQUksQ0FBdEJJLElBQUk7RUFDL0IsSUFBTVQsV0FBVyxHQUFHRixJQUFJLEdBQUcsQ0FBQyxHQUFHWSxRQUFRLENBQUNaLElBQUksQ0FBQyxHQUFHLENBQUM7RUFFakQsSUFBTWEsVUFBVSxHQUFHQyxJQUFJLENBQUNDLElBQUksQ0FBQ1AsVUFBVSxHQUFHTCxZQUFZLENBQUM7RUFFdkQsT0FBTztJQUFFVSxVQUFVLEVBQVZBLFVBQVU7SUFBRVgsV0FBVyxFQUFYQSxXQUFXO0lBQUVNLFVBQVUsRUFBVkEsVUFBVTtJQUFFRSxPQUFPLEVBQVBBO0VBQVEsQ0FBQztBQUN6RCxDQUFDO0FBQUNMLE9BQUEsQ0FBQUMsYUFBQSxHQUFBQSxhQUFBIn0=