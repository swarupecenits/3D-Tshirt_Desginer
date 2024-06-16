import React from 'react'
import CustomButton from './CustomButton';
import Gradient_btn from './Gradient_btn';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <Gradient_btn 
            variant="outline"
            label="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <Gradient_btn 
              variant="outline"
              label="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />

            <Gradient_btn 
              variant="filled"
              label="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker