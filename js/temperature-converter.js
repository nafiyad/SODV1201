$(document).ready(function() {
    const convertTemperature = function(fahrenheit) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        const kelvin = celsius + 273.15;
        return { celsius, kelvin };
    };

    $('#tempForm').submit(function(e) {
        e.preventDefault();
        const fahrenheit = parseFloat($('#fahrenheit').val());

        if (isNaN(fahrenheit)) {
            $('#result').html('<p style="color: red;">Please enter a valid number for the temperature.</p>');
            return;
        }

        const { celsius, kelvin } = convertTemperature(fahrenheit);

        $('#result').html(`
            <p>Celsius: ${celsius.toFixed(2)}°C</p>
            <p>Kelvin: ${kelvin.toFixed(2)}K</p>
        `);
    });
});