/**
 * # Nucleus Angular Ellipse
 *
 * This filter will ellipse text when it reaches is certain length.
 *
 * @module nag.ellipse
 * @ngfilter nagEllipse
 *
 * @param {string} text Text to ellipse
 * @param {number} [minLength=17] Minimum length the text need to be in order for the ellipse to trigger
 * @param {number} [beginningShow=5] Number of characters from the beginning to show
 * @param {number} [endingShow=8] Number of character from the ending to show
 *
 * @return {string} The text to display
 *
 * @example To use the default settings:
 *
 * ```html
 * <!-- would output: some_...full.png -->
 * {{text | nagEllipse}}
 *
 * <script type="text/javascript">
 * //inside a controller somewhere
 * $scope.text = 'some_really_long_file_name_that_should_not_be_shown_in_full.png';
 * </script>
 * ```
 *
 * You can also define your own settings:
 *
 * ```html
 * <!-- would output: so..._in_full.png -->
 * {{text | nagEllipse}}
 *
 * <!-- would output: some_really_long_file_name_that_should_not_be_shown_in_full.png
 * {{text | nagEllipse}}
 *
 * <script type="text/javascript">
 * //inside a controller somewhere
 * $scope.text = 'some_really_long_file_name_that_should_not_be_shown_in_full.png';
 * </script>
 * ```
 */
angular.module('nag.ellipse', [])
.filter('nagEllipse', [function(){
  return function(text, minLength, beginningShow, endingShow){
    minLength = minLength || 17;
    beginningShow = beginningShow || 5;
    endingShow = (endingShow || 8) * -1;
    if(text.length < minLength) {
      return text;
    } else {
      return text.substr(0, beginningShow) + '...' + text.substr(endingShow);
    }
  };
}]);
