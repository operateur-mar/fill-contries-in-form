$(document).ready(function () {

    const URL = 'https://restcountries.eu/rest/v2/all';
    $.ajax({

        url: URL,
        type: "GET",
        success: function (result) {
            /*======== Delete & Append the input to select ========= */
            $.each(result, function (index) {
                // console.log(result[index].name);
                $('#contries').append('<option value="' + result[index].name + '">' + result[index].name + '</option>');

            });
            /*============ Apend first values on load =============== */
            $(".flag").attr("src", result[0].flag);
            $(".prefix").val(result[0].callingCodes[0]);

            /*============ Change Values on Selecting country =============== */
            $("#contries").on("change", function (i) {
                $(".flag").attr("src", result[i.target.selectedIndex].flag);
                $(".prefix").val(result[i.target.selectedIndex].callingCodes[0]);
                console.log(result[i.target.selectedIndex].callingCodes[0]);
            });

        },
        error: function (error) {
            consol.log('OOPS');
        }
    })
});
/*=================== www.Aqweeb.com ================= */