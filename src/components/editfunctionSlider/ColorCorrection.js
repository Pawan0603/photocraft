import React from 'react'

function ColorCorrection({ handleColorCorrection, colorCorrection }) {

    return (
        <div className='mx-4 flex flex-col gap-y-2'>
            <h3 className='text-gray-700 dark:text-gray-300 mb-3'>Color Correction</h3>
            <div>
                <label htmlFor='brightness' className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'>
                    <span>Brightness</span>
                    <input type='number' value={colorCorrection.brightness} className='outline-none border rounded-md w-10 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                </label>
                <input
                    onChange={(e) => { handleColorCorrection("brightness", e.target.value) }}
                    defaultValue={colorCorrection.brightness}
                    id='brightness'
                    name='brightness'
                    type={'range'}
                    min={-100}
                    max={100}
                    className='w-full outline-none'
                />
            </div>
            <div>
                <label htmlFor='contrast' className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'>
                    <span>Contrast</span>
                    <input type='number' value={colorCorrection.contrast} className='outline-none border rounded-md w-10 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                </label>
                <input
                    onChange={(e) => { handleColorCorrection("contrast", e.target.value) }}
                    defaultValue={colorCorrection.contrast}
                    id='contrast'
                    name='contrast'
                    type={'range'}
                    min={-100}
                    max={100}
                    className='w-full outline-none'
                />
            </div>
            <div>
                <label htmlFor='gamma' className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'>
                    <span>gamma</span>
                    <input type='number' value={colorCorrection.gamma} className='outline-none border rounded-md w-10 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                </label>
                <input
                    onChange={(e) => { handleColorCorrection("gamma", e.target.value) }}
                    defaultValue={colorCorrection.gamma}
                    id='gamma'
                    name='gamma'
                    type={'range'}
                    min={0}
                    max={100}
                    className='w-full outline-none'
                />
            </div>
            <div>
                <label htmlFor='hue' className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'>
                    <span>Hue</span>
                    <input type='number' value={colorCorrection.hue} className='outline-none border rounded-md w-10 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                </label>
                <input
                    onChange={(e) => { handleColorCorrection("hue", e.target.value) }}
                    defaultValue={colorCorrection.hue}
                    id='hue'
                    name='hue'
                    type={'range'}
                    min={0}
                    max={360}
                    className='w-full outline-none'
                />
            </div>
            <div>
                <label htmlFor='saturation' className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'>
                    <span>Saturation</span>
                    <input type='number' value={colorCorrection.saturation} className='outline-none border rounded-md w-10 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                </label>
                <input
                    onChange={(e) => { handleColorCorrection("saturation", e.target.value) }}
                    defaultValue={colorCorrection.saturation}
                    id='saturation'
                    name='saturation'
                    type={'range'}
                    min={-100}
                    max={100}
                    className='w-full outline-none'
                />
            </div>
            <div>
                <label htmlFor='vibrance' className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'>
                    <span>Vibrance</span>
                    <input type='number' value={colorCorrection.vibrance} className='outline-none border rounded-md w-10 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                </label>
                <input
                    onChange={(e) => { handleColorCorrection("vibrance", e.target.value) }}
                    defaultValue={colorCorrection.vibrance}
                    id='vibrance'
                    name='vibrance'
                    type={'range'}
                    min={-100}
                    max={100}
                    className='w-full outline-none'
                />
            </div>
            <div>
                <label htmlFor='sepia' className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'>
                    <span>Sepia</span>
                    <input type='number' value={colorCorrection.sepia} className='outline-none border rounded-md w-10 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                </label>
                <input
                    onChange={(e) => { handleColorCorrection("sepia", e.target.value) }}
                    defaultValue={colorCorrection.sepia}
                    id='sepia'
                    name='sepia'
                    type={'range'}
                    min={0}
                    max={100}
                    className='w-full outline-none'
                />
            </div>
            {/* <div>
                <label htmlFor='tint' className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'>
                    <span>Tint</span>
                    <input type='number' value={colorCorrection.tint} className='outline-none border rounded-md w-10 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                </label>
                <input
                    onChange={(e) => { handleColorCorrection("tint", e.target.value) }}
                    defaultValue={colorCorrection.tint}
                    id='tint'
                    name='tint'
                    type={'range'}
                    min={-100}
                    max={100}
                    className='w-full outline-none'
                />
            </div>
            <div>
                <label htmlFor='duotone' className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'>
                    <span>Duotone</span>
                    <input type='number' value={colorCorrection.duotone} className='outline-none border rounded-md w-10 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                </label>
                <input
                    onChange={(e) => { handleColorCorrection("duotone", e.target.value) }}
                    defaultValue={colorCorrection.duotone}
                    id='duotone'
                    name='duotone'
                    type={'range'}
                    min={-100}
                    max={100}
                    className='w-full outline-none'
                />
            </div> */}
        </div>
    )
}

export default ColorCorrection