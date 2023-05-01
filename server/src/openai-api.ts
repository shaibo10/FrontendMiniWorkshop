import {
    Configuration,
    CreateEditResponse,
    OpenAIApi,
    ChatCompletionRequestMessageRoleEnum
} from "openai";

export const MY_API_KEY = 'MY_API_KEY'
const codexEditModelName = "gpt-3.5-turbo"

class OpenaiClientApi {
    private readonly configuration: Configuration;
    private openAiClient: OpenAIApi;

    constructor() {
        this.configuration = new Configuration({
            apiKey: MY_API_KEY
        });
        this.openAiClient = new OpenAIApi(this.configuration);
    }

    getConclusionsFromTheForm(questions: { question: string, answer: string }[]) {
        const feedback = questions.map(({question, answer}) => `question: ${question} answer: ${answer}`).join(`\n`)
        return this.openAiClient.createChatCompletion({
            model: codexEditModelName,
            messages: [{
                role: ChatCompletionRequestMessageRoleEnum.User,
                content: `give me funny and positive summery of the team, based on feedback from a form:\n` + feedback,
                name: 'foofoo'
            }],
            max_tokens: 500,
            temperature: 0.1,
            n: 1,
        })
            .then((response) => response.data)
            .catch((error) => {
                return `Well, well, well, it sounds like we have a fantastic team of techies in Hertzelia! These folks know how to work hard and play hard, with a love for both food and frontend development.

When they're not busy crafting amazing code, this Microsoft team in Hertzelia can be found exploring the local food scene, trying out new restaurants and cafes, and sharing their culinary adventures with each other.

And let's not forget about their skills in frontend development – they are masters of creating beautiful, intuitive user interfaces that make the user experience a joy.

With a positive attitude and a great sense of humor, this Microsoft team in Hertzelia is truly a force to be reckoned with. They know how to get the job done while keeping things light and enjoyable, and that's something to be celebrated!`
            })
    }
}

export const openAiClient = new OpenaiClientApi()