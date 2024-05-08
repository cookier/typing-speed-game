import Caret from "./Caret";

const UserType = ({ userInput, className }: { userInput: string, className?: string }) => {
    const typeCharacters = userInput.split('');
    return (
        <div className={className}>
            {typeCharacters.map((char, index) => {
                return <Character char={char} index={index} />
            })}
            <Caret />
        </div>
    )
}
const Character = ({ index, char }: { index: number, char: string }) => {
    return <span className='text-primary-500' >{char}</span>;
}

export default UserType;

