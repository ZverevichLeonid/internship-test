function findIndexFirstSpace(inputValue: string) {
  return inputValue.split(" ")[0].length + 1;
}

export function setCursor(
  inputValue: string,
  inputRef: React.RefObject<HTMLInputElement>
) {
  if (inputRef.current) {
    let indexFirstSpace = findIndexFirstSpace(inputValue);
    inputRef.current.focus();
    inputRef.current.setSelectionRange(indexFirstSpace, indexFirstSpace);
  }
}
