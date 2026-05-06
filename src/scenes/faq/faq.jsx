import {Box, Typography, useTheme} from "@mui/material"
import Header from "../../components/Header"
import { tokens } from "../../theme"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"



const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const faqs = [
        {
            question: "What file formats are supported for data import?",
            answer: "We support CSV files with standard comma or semicolon delimiters. Your CSV should include columns for date, customer_id, customer_name, campaign, channel, category, amount, and region. Check the sample format in the Datasets page."
        },
        {
            question: "How is the average transaction amount calculated in Analytics?",
            answer: "The average is computed by dividing the total amount of all transactions by the number of transactions in the filtered dataset. Updates occur in real-time as you apply filters for campaign, channel, or region."
        },
        {
            question: "Can I export my dashboard data and reports?",
            answer: "Yes! The Datasets page includes a download button to export filtered data as CSV. You can also use the Analytics filters to narrow data before exporting specific subsets of your marketing performance."
        },
        {
            question: "How do I filter data by region or campaign?",
            answer: "Use the dropdown filters on the Analytics page to select a campaign or region. Select 'All' to view data without filters. Filters are applied independently, and you can combine multiple filters to refine your analysis."
        },
        {
            question: "What do the KPI cards on the Dashboard represent?",
            answer: "KPI cards display key performance indicators: Total Sales (transaction count), Revenue (sum of amounts), Active Clients (unique customer count), and Traffic (web visits/interactions). Progress rings show performance against targets set in Settings."
        },
        {
            question: "How can I set performance targets for my campaigns?",
            answer: "Go to the Settings page to define your Monthly Revenue Target and Maximum Campaign Budget. These become your benchmarks for comparing actual performance on the Dashboard."
        }
    ];

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle= "Frequently asked questions"/>

            {faqs.map((faq, index) => (
                <Accordion key={index} defaultExpanded={index === 0}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            {faq.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {faq.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )

}

export default Faq
