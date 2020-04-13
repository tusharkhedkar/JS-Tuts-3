class myconsole {

    args = [];
    constructor() {}

    log() {
        //this.args = arguments;
        // this.initializeArgs(arguments);
        let data = '';
        if (arguments.length == 0)
            data = '';
        else
            for (let i = 0; i < arguments.length; i++)
                if (arguments[i] != NaN || arguments[i] !== undefined || arguments[i] !== null) {
                    data += arguments[i];
                    console.log(this.args);

                    this.args.push(arguments[i]);
                }



        return data;
    }

    initializeArgs() {
        // this.args = aruments;
        console.log(this.args);
    }


    history() {
        let data = '';
        if (arguments.length > 0)
            return '' + this.args[arguments[0]];
        if (this.args.length === 0)
            return data;

        for (let index = 0; index < this.args.length; index++) {
            if (index != this.args.length - 1)
                data = data + this.args[index] + '\n';
            else
                data = data + this.args[index];

        }

        return data;
    }

    clearHistory() {
        this.args = [];
        return true;
    }
}