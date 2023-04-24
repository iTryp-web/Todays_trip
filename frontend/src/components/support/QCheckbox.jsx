import { InqCheckDiv } from "../../styles/SupportStyle";

const QCheckbox = ({ children, checked, onChange }) => {
  return (
    <InqCheckDiv>
      <label>
        <input 
          type="checkbox"
          checked={checked}
          onChange={({ target: { checked } }) => onChange(checked)}
        />
        {children}
      </label>
    </InqCheckDiv>
  );
};

export default QCheckbox;
