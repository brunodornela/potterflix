import { Link } from 'react-router-dom'
import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CreateCategory() {

    const initialValues = {
        name: '',
        description: '',
        color: '#ff0000'
    }
    const [categoryList, setCategoryList] = useState(['Test', 'outro']);
    const [newCategory, setNewCategory] = useState(initialValues);

    function setCategory(key, value) {
        setNewCategory({
            ...newCategory,
            [key]: value
        })
    }

    function handleOnChange(eventInfos) {
        const { value } = eventInfos.target;
        setCategory(
            eventInfos.target.getAttribute('name'), 
            value
        );
    }

    return (
        <PageDefault>

            <form onSubmit={function handleSubmit(eventInfos) {
                eventInfos.preventDefault();
                setCategoryList([
                    ...categoryList, newCategory.name
                ]);
                setNewCategory(initialValues);
            }}>
                
                <h1>Create category: {newCategory.name}</h1>
                <FormField 
                    label="Name"
                    type="text" 
                    name="name"
                    value={newCategory.name} 
                    onChange={handleOnChange} />
                
                <FormField 
                    label="Description"
                    type="text" 
                    name="description"
                    value={newCategory.description} 
                    onChange={handleOnChange} />
                
                <FormField 
                    label="Color"
                    type="color" 
                    name="color"
                    value={newCategory.color}
                    onChange={handleOnChange} />
                <button>
                    Save
                </button>
            </form>

            <ul>
                {categoryList.map((categoryItem, index) => { 
                    return (
                        <li key={`${categoryItem}${index}`}>
                            {categoryItem}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                    Back to home
            </Link>
        </PageDefault>
    )
}

export default CreateCategory;