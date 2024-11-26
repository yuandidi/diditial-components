import { ChangeEvent, FC, useState } from "react";
import Input, {InputProps} from "../Input/input";

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[];
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => React.ReactElement;
}

export const AutoComplete: FC<AutoCompleteProps> = ({value, fetchSuggestions, onSelect,renderOption, ...restProps}) => {
  const [inputValue, setInputValue] = useState(value)
  const [ suggestions, setSuggestions ] = useState<DataSourceType[]>([])

  console.log(suggestions)
  const handleChange =(e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if(value) {
      const results = fetchSuggestions(value)
      setSuggestions(results)
    } else {
      setSuggestions([])
    }
  }
  const handleSelect =(item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    if(onSelect) {
      onSelect(item)
    }
  }
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }
  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li key={ index } onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <div className="viking-auto-complete">
      <Input
        value={inputValue}
        onChange={handleChange}
        {...restProps}
      />
      {suggestions.length > 0 && generateDropdown()}
    </div>
  )
}

export default AutoComplete