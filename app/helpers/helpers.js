class StringHelper {
    static isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }
}
class NumberHelper {
    static round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
}
