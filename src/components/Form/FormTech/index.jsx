import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { MdArrowDropDown } from 'react-icons/md'
import Form from '../style'
import { useContext, useRef } from 'react'
import { TechsContext } from '../../../contexts/techs'
import ButtonSmall from '../../Button/Small/style'
import ButtonMain from '../../Button/style'

const schema = yup.object({
    title: yup.string().required('O nome da tecnologia é obrigatório'),
    status: yup.string().required('O status da tecnologia é obrigatório')
}).required()

function FormTech({ upDateType }) {
    const { techCached: { id, title, status }, techCreate, techUpdate, techDelete } = useContext(TechsContext)
    const { register, handleSubmit, formState: { errors, isDirty }, setValue } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: title,
            status: status,
        }
    })
    const validWithoutError = Object.values(errors).length > 0

    return (
        <Form onSubmit={upDateType ? handleSubmit(data => techUpdate(id, data)) : handleSubmit(techCreate)}>
            <div>
                <label htmlFor="name">Nome</label>
                <p>{errors.title?.message}</p>
                <input type="text" placeholder="Tecnologia" {...register('title')} />

                <label htmlFor="status">Selecionar status</label>
                <p>{errors.status?.message}</p>
                <div>
                    <select id="status" {...register('status')}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>

                    <MdArrowDropDown />
                </div>
            </div>

            {upDateType ?
                <div>
                    <ButtonSmall 
                        type="submit" 
                        onClick={handleSubmit(data => techUpdate(id, data))}
                        className={!isDirty ? "disable" : ''}
                    >Salvar alterações</ButtonSmall>
                    <ButtonSmall type="submit" onClick={handleSubmit(() => techDelete(id, title))}>Excluir</ButtonSmall>
                </div>
                :
                <ButtonMain 
                    type="submit" 
                    onClick={handleSubmit(data => techCreate(data, setValue))}
                    className={validWithoutError || !isDirty ? "disable" : ''}
                >Cadastrar Tecnologia</ButtonMain>
            }
        </Form>
    )
}

export default FormTech