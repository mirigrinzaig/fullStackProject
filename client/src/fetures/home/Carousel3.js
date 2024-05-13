import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const ImageSlider = ({ images }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Take only the first 15 images
  const displayedImages = images.slice(0, 15);

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      חזור
      </Button>
      <Box display="flex" flexDirection="column" alignItems="center" margin={5}>
      <img width={400} height={300} src={displayedImages[activeStep]} alt={`Image ${activeStep + 1}`} />
      <MobileStepper
        variant="dots"
        steps={displayedImages.length}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={null}
        backButton={null}
      />
      </Box>
      <Button
        size="small"
        onClick={handleNext}
        disabled={activeStep === displayedImages.length - 1}
      >
        הבא
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </Button>
     
    </Box>
  );
};

export default ImageSlider;

useEffect(() => {
        axios.get(`${SERVERURL}/api/Product/getimages`)
            .then((response) => {
                const images = response.data;
                const mappedImages = MapNames(images);
                setPictures(mappedImages);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <ImageSlider images={pictures} />
            <Contact />
        </Box>
    );


