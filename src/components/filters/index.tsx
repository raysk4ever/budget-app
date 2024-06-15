import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'January' },
    { value: 'strawberry', label: 'Febuary' },
    { value: 'march', label: 'March' },
    { value: 'april', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'june', label: 'June' },
    { value: 'july', label: 'July' },
    { value: 'aug', label: 'Aug' },
  ];

export default function Filters() {
   const handleChange = () => {
   }
    return (
        <section className="filter-wrapper">
             <Select
                // value={selectedOption}
                onChange={handleChange}
                options={options}
            />
        </section>
    )
}