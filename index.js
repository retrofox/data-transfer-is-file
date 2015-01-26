
/**
 * dataTransferIsFile
 * @param  {Object} ev event
 * @return {Boolean} true if dataTransfer has files in its type property
 */

function dataTransferIsFile(ev) {
  var types = ev.dataTransfer.types;
  var is = types.contains ? types.contains('Files') : (types.indexOf('Files') !== -1);
  return is;
}

/**
 * Module exports.
 */

module.exports = dataTransferIsFile;