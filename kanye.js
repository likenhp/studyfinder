class KanyeQuote {
    constructor() {
        this.quote = null;

        this.getKanyeQuote();
    }

    getKanyeQuote() {
        $.ajax({
            url: 'https://api.kanye.rest',
            dataType: 'json',
            method: 'get',
            success: this.appendKanyeQuote,
            error: (resp) => {
                console.log('Kanye don\'t care, son!');
            }
        })
    }

    appendKanyeQuote(response) {
        this.quote = response.quote;

        $('#kanyeQuote').text('"' + this.quote + '"');
    }
}