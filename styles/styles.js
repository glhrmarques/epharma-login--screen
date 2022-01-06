import styled from 'styled-components/native';

//Stroke Button 
export const StrokeButton = styled.Pressable`
  border: 1px solid #fafafa;
  border-radius: 100px;
  width: 175px;
  padding: 20px 0;
`;

export const StrokeButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fafafa;
    text-align: center;
`;

// Default Button
export const DefaultButton = styled.Pressable`
    background-color: #94E8E8;
    border-radius: 100px; 
    width: 175px;
    padding: 20px 0;
`;

export const DefaultButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #3d3d3d;
    text-align: center;
`;