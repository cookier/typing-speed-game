const UserType = ({ userInput, className }: { userInput: string, className?: string }) => {
    const typeCharacters = userInput.split('');
    return (
        <div className={className}>
            {typeCharacters.map((char, index) => {
                return <Character index={index} char={char} />
            })}
        </div>
    )
}
const Character = ({ index, char }: { index: number, char: string })=> {
    return <span key={`${index}_${char}`}>{char}</span>;
}

export default UserType;

