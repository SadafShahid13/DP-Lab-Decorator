interface Texts {
    modifyText(): string
}

export class PlainTexts implements Texts {

    userText: string

    constructor(userText: string) {
        this.userText = userText
    }

    public modifyText(): string {
        return this.userText;
    }
}

class TextDecorator implements Texts {
    protected textContent: Texts;

    constructor(textContent: Texts) {
        this.textContent = textContent;
    }

    public modifyText(): string {
        return this.textContent.modifyText();
    }
}

export class BoldDecorator extends TextDecorator {
    public modifyText(): string {
        return super.modifyText().bold();
    }
}

export class ItalicDecorator extends TextDecorator {
    public modifyText(): string {
        return super.modifyText().italics();
    }
}

export class StrikeOutDecorator extends TextDecorator {
    public modifyText(): string {
        return super.modifyText().strike();
    }
}

export function showOutput(textContent: Texts) {
    console.log(`${textContent.modifyText()}`);
}