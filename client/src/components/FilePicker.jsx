import React from 'react'
import CustomButton from './CustomButton'
import Gradient_btn from './Gradient_btn'


const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label ">
          Upload Design
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex gap-3">
        <Gradient_btn
          variant="outline"
          label="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs white"
        />
        <Gradient_btn
          label="Full"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker